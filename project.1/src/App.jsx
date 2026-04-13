import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home"; // твой код
import Analytics from "./pages/Analytics";
import Tasks from "./pages/Tasks";
import Kanban from "./pages/Kanban";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/Hellow" element={ <h1>Hellow world</h1>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;