module.exports = {
    // types: [
    //     { value: 'feat', name: 'feat:     Новая функция' },
    //     { value: 'fix', name: 'fix:      A bug fix' },
    //     { value: 'docs', name: 'docs:     Documentation only changes' },
    //     {
    //         value: 'style',
    //         name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    //     },
    //     {
    //         value: 'refactor',
    //         name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    //     },
    //     {
    //         value: 'perf',
    //         name: 'perf:     A code change that improves performance',
    //     },
    //     { value: 'test', name: 'test:     Adding missing tests' },
    //     {
    //         value: 'chore',
    //         name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    //     },
    //     { value: 'revert', name: 'revert:   Revert to a commit' },
    //     { value: 'WIP', name: 'WIP:      Work in progress' },
    // ],

    //scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],
    types: [
        { value: 'WIP', name: 'Работа в процессе' },
        { value: 'feat', name: 'Новая функциональность' },
        { value: 'fix', name: 'Исправление ошибки' },
        { value: 'docs', name: 'Изменения в документации' },
        { value: 'style', name: 'Форматирование (отсутствие точек с запятой и т.д.; без изменения кода)' },
        { value: 'refactor', name: 'Рефакторинг производственного кода' },
        { value: 'test', name: 'Добавление тестов, рефакторинг тестов; (без изменения производственного кода)' },
        { value: 'chore', name: 'Обновление задач сборки, конфигурации менеджера пакетов и т.д.;\n (без изменения производственного кода)' },

    ],

    usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    // ticketNumberPrefix: 'TICKET-',
    // ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
   
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: "Выберите тип внесенного изменения:",
        scope: '\nУкажите ОБЛАСТЬ этого изменения (необязательно):',
        // используется, если allowCustomScopes равен true
        customScope: 'Укажите ОБЛАСТЬ этого изменения:',
        subject: 'Напишите КОРОТКОЕ описание изменения в повелительном наклонении:\n',
        body: 'Укажите БОЛЕЕ ПОДРОБНОЕ описание изменения (необязательно). Используйте "|" для переноса строки:\n',
        breaking: 'Укажите ЛЮБЫЕ НАРУШЕНИЯ СОВМЕСТИМОСТИ (необязательно):\n',
        footer: 'Укажите ЛЮБЫЕ ЗАКРЫТЫЕ ПРОБЛЕМЫ, связанные с этим изменением (необязательно). Например: #31, #34:\n',
        confirmCommit: 'Вы уверены, что хотите выполнить указанное выше действие?',
    },

    allowCustomScopes: false,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['scope', 'body', 'footer'],

    // limit subject length
    subjectLimit: 50,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
};