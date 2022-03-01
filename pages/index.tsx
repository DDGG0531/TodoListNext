import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { PageTitle } from "../components/Layout";
import TodoList from "../components/TodoList";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const dev = process.env.NODE_ENV !== "production";
const server = dev
  ? "http://localhost:3000"
  : "https://todo-list-next-zeta.vercel.app";
const URL = `${server}/api/todo`;

const Home: NextPage = ({
  fallbackData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: todos, error } = useSWR(URL, fetcher, { fallbackData });
  return (
    <>
      <PageTitle text="記事本" />
      <TodoList defaultTodos={todos}></TodoList>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("getServerSideProps start");
  const data = await fetcher(URL);
  console.log("getServerSideProps", data);
  return { props: { fallbackData: data } };
};

export default Home;
