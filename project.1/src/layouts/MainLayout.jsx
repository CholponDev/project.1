import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: 20 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;