import Sidebar from "./components/sidebar/sidebar";
import BoardTasks from "./components/boardtasks/boardtasks";

export default function Home() {
  return (
    <main className="flex h-full">
      <Sidebar />
      <BoardTasks />
    </main>
  );
}
