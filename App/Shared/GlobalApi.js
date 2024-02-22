import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clscw9zph0f2s01w6737ylvqp/master";

const getCategory = async () => {
  const query = gql`
query MyQuery {
  categories {
    id
    name
    icon {
      url
    }
    slug
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;

}

const getCourseList = async () => {
  const query = gql`
  query MyQuery {
    courseLists(first: 50, orderBy: createdAt_DESC) {
      author
      description
      course
      id
      name
      slug
      tag
      youtubeUrl
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
    }
  }
   `
  const result = await request(MASTER_URL, query);
  return result;
}

// Check the User Enrollment of the
const checkUserCourseEntrollment = async (slug, email) => {
  const query = gql`
  query MyQuery {
    userEntrollCourses(where: {courseId: "`+ slug + `", userEmail: "` + email + `"}) {
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      id
    }
  }
   `
  const result = await request(MASTER_URL, query);
  return result;
}

// Save the Course Enrollment 
const saveUserCourseEnroll = async (slug, email) => {
  const query = gql`
mutation MyMutation {
  createUserEntrollCourse(
    data: {courseId: "`+ slug + `", courseList: {connect: {slug: "` + slug + `"}}, userEmail: "` + email + `"}
  ) {
    id
  }
   publishManyUserEntrollCourses {
    count
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}

// Mark the Completed Chapter
const markChapterCompleted = async (recordId, chapterId) => {
  const query = gql`
  mutation MyMutation {
  updateUserEntrollCourse(
    data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+ chapterId + `"}}}}}
    where: {id: "`+ recordId + `"}
  )
  {
    id
  }
  publishManyUserEntrollCourses {
    count
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}

// Get All Users Enroll Courses
const getAllUserEntrollCourses = async (email) => {
  const query = gql`
    
    query MyQuery {
      userEntrollCourses(where: {userEmail: "`+ email + `"}) {
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseId
        courseList {
          author
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          description
          id
          name
          slug
          tag
          totalChapter
          course
        }
      }
    }
    
    `

  const result = await request(MASTER_URL, query);
  return result;

}

export default {
  getCategory,
  getCourseList,
  checkUserCourseEntrollment,
  saveUserCourseEnroll,
  markChapterCompleted,
  getAllUserEntrollCourses
}