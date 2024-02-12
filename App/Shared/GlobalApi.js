import { request, gql } from 'graphql-request'


const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clscw9zph0f2s01w6737ylvqp/master";

const getCategory = async () =>{
const query=gql `

query MyQuery {
  categories {
    id
    name
    icon {
      url
    }
  }
}

`

const result=await request(MASTER_URL,query);
return result;

}

const getCourseList= async ()=>{
  const query=gql`
  query MyQuery {
    courseLists(first: 5, orderBy: createdAt_DESC) {
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
  const result=await request(MASTER_URL,query);
  return result;

}


const checkUserCourseEntrollment= async(slug, email)=>{

  const query=gql `
  
  query MyQuery {
    userEntrollCourses(where: {courseId: "`+slug+`", userEmail: "`+email+`"}) {
      completedChapter {
        ... on CompletedChapter {
          id
        }
      }
      courseId
      id
    }
  }
  
  
  `

  const result=await request(MASTER_URL,query);
  return result;

}

export default {
  getCategory,
  getCourseList,
  checkUserCourseEntrollment

}