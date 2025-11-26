export function Layout({ children, sidebar }) {
  return (
    <div className="layout">
      <header>HEADER</header>
      {sidebar}
      <main>{children}</main>

      <footer>
        <p>© 2025 Все права защищены</p>
      </footer>
    </div>
  );
}
