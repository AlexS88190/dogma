### Приложение по добавлению, удалению, редактированию и поиску карточек:

Данное приложение разработано согласно тестового задания. В приложении реализована авторизация по предоставленному в тестовом задании логину и паролю, редактирование профиля, запросы на сервер  
для получения новостей и изображений. Согласно ТЗ при получении новостей и изображений реализован "бесконечный скролл" (использован свой кастомный хук) для автоматической подгрузки контента. Т.к. верстка осуществлялась с  
помощью библиотеки AntD, при обработке возможных ошибок от сервера использованы ее возможности. После получения новостей имеется возможность отфильтровать полученные карточки по автору путем  
нажатия на его имя.
В связи с малым размером приложения, а также небольшим количеством и вложенностью компонентов было принято решение в ходе работы не использовать библиотеки хранения состояний такие как  Redux  
и MobiX, а ограничиться базовыми инструментами React по изменению и хранинию state.

### В данном проекте применены следующие технологии:
* Проект построен на библиотеке React c использованием функционального подхода
* AntDesign
* Проект написан на языке TypeScript
* Верстка отдельных элементов
* Применена трансформация отдельных элементов
* При верстке приложения применена методология БЭМ

### Запуск приложения:
Возможно два варианта запуска приложения в зависимости использования Docker (команды набираются без ковычек)
1. **Без** Docker
* Уcтановить на компьютер серверную среду [Node.js](https://nodejs.dev/en/download)
* Скопировать проект
* Скопировать .env.example в .env. В файле .env задать указанный пароль входа в приложение в ТЗ 
* Командой "npm install" установить все зависимости
* Командой "npm run start" запустить приложение

2. **Если используете** Docker _(предпочтительный способ)_
* Скопировать проект
* Командой "npm install" установить все зависимости
* Скопировать .env.example в .env. В файле .env задать указанный пароль входа в приложение в ТЗ
* Командой "docker build -t bars-app ." собрать приложение
* Командой docker-compose up запустить приложение в контейнере Docker
* После того как контейнер запустится, приложение будет доступно на 80-м порту по [ссылке](http://localhost:80)

### С функционалом приложения можно ознакомиться по [ссылке](https://alexs88190.github.io/dogma/)

Репозиторий [здесь](https://github.com/AlexS88190/dogma)