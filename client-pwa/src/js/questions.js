import { graphQLRequest } from "./graphql"

export const getQuestion = async (id) => {
    const { data } = await graphQLRequest(`query getQuestion($number: [QueryArgument] ) {
  questionsEntries(questionNumber: $number) {
    ... on questions_default_Entry {
      id
      number: questionNumber
      content: questionContent
      type: questionType
      answers: questionAnswers {
        answer: answers
      }
    }
  }
}`,{ "number": id });
    return data.questionsEntries[0];
}