### Приложение по добавлению, удалению, редактированию и поиску карточек:

Данное приложение разработано согласно тестового задания. В приложении реализоваyf , удалению, редактированию и поиску карточек. Поиск осуществляется при введении подстроки  
названия карточки в форму поиска, при этом регистр букв значения не имеет. Приложение сверстано под разрешение экрана 1280х768, так как на нем его пропорции наиболее приближены к макету в ТЗ.  
В связи с малым размером приложения, а также небольшим количеством и вложенностью компонентов было принято решение в ходе работы не использовать библиотеки хранения состояний такие как  Redux  
и MobiX, а ограничиться базовыми инструментами React по изменению state.

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
* Командой "npm install" установить все зависимости
* Командой "npm run start" запустить приложение

2. **Если используете** Docker _(предпочтительный способ)_
* Скопировать проект
* Командой "npm install" установить все зависимости
* Командой "docker build -t bars-app ." собрать приложение
* Командой docker-compose up запустить приложение в контейнере Docker
* После того как контейнер запустится, приложение будет доступно на 80-м порту по [ссылке](http://localhost:80)

### С функционалом приложения можно ознакомиться по [ссылке](https://bs50.github.io/bars/) (если с телефона, то перевести его в горизонтальный режим, т.к. приложение сверстано по-быстрому без адаптации под различные разрешеиния экранов)

Репозиторий [здесь](https://github.com/bs50/bars)