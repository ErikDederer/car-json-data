1. Общие правила1. Прямая работа с веткой`main` запрещена.
2. Все изменения выполняются только в feature-ветках.
3. Любые изменения попадают в`main` только через Pull Request.
4. Каждый Pull Request должен пройти минимум одно ревью.

2. Работа с ветками-`main` — основная ветка-`feature/*` — ветки задач Формат:feature/issue-<номер>-<описание> 
3. Коммиты Формат:<type>: <описание> (issue #N)Типы:docs, feat, fix, chore 
4. Pull RequestPR должен содержать:
- заголовок
- описание
- ссылку на issue
- ревьюера 
5. Синхронизация с mainПеред PR: git checkout maingit pull origin maingit checkout <ветка>git merge main 
6. КонфликтыПри конфликте:
1. Исправить файл
2. git add<file>
3. git commit -m "fix: resolve merge conflict"
4. git push