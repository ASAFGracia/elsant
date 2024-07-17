const { createElement } = React;
const { createRoot } = ReactDOM;

// Создаем элемент input с placeholder и обработчиком события onClick
const inputElement = createElement('input', {
  placeholder: "Help text",
  onClick: () => console.log("Clicked")
});

// Получаем элемент контейнера в DOM
const container = document.getElementById("app");

// Создаем корень React и рендерим элемент
const root = createRoot(container);
root.render(inputElement);
