import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// import { client } from "./lib/apollo";

const GET_LESSON_QUERY = gql`
  query MyQuery {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  // useEffect(() => {
  //   client.query({ query: GET_LESSON_QUERY });
  // }, []);

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY);

  // return <div className="text-zinc-100">ajlskla</div>;
  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}
