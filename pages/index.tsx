import type { NextPage } from "next";
import { PageTitle } from "../components/Layout";
import TodoList from "../components/TodoList";

const Home: NextPage = () => {
  return (
    <>
      <PageTitle text="記事本" />
      <TodoList></TodoList>
    </>
  );
};

export default Home;
