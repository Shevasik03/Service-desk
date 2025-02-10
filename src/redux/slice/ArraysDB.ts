export interface TicketsSettingProps {
    src: string;
    category: string;
    subcategory: string[];
    onClick?: () => void;
}

export type tableRowProps = {
        user: string;
        employeePosition: string;
        mail: string;
        key: number
}

export const arrayStatus: Array<string> = ["В роботі", "В черзі", "Пауза", "Чорновик", "Відхилена", "Виконано"]

export const arrayUsersInformation = [
    {
        department: "Керівний склад",
        users: [
            { user: 'Дулєнцов Денис Михайлович', employeePosition: 'Директор з управління даними та інформаційними технологіями', mail: 'denys.dulientsov@nemiroff.pro' },
            { user: "Прімак Дар'я Павлівна", employeePosition: 'Начальник відділу розробки програмного забезпечення', mail: 'daria.primak@nemiroff.pro' },
            { user: 'Кравець Юрій Васильович', employeePosition: 'Провідний фахівець зі звітності та аналітики', mail: 'yurii.kravets@nemiroff.pro' },
            { user: 'Гоцман Сергій Сергійович', employeePosition: 'Начальник відділу підтримки та розвитку інфраструктури', mail: 'sergey.gotsman@nemiroff.pro' },
            { user: 'Варенич Олександр Анатолійович', employeePosition: 'Керівник відділу аналізу даних та звітності', mail: 'oleksandr.varenych@nemiroff.pro' },
            { user: 'Федорчук Костянтин Сергійович', employeePosition: 'Менеджер з керування даними', mail: 'kostiantyn.fedorchuk@nemiroff.pro' },
            { user: 'Борушенко Ірина Геннадіївна', employeePosition: 'Аналітик бізнесу', mail: 'iryna.borushenko@nemiroff.pro' },
        ]
    },
    {
        department: "Відділ розробки програмного забезпечення",
        users: [
            { user: 'Ейсмонт Віктор Володимирович', employeePosition: 'Інженер-програміст', mail: 'viktor.eismont@nemiroff.pro' },
            { user: 'Поліновський Олег Анатолійович', employeePosition: 'Провідний інженер-програміст', mail: 'oleh.polinovskyi@nemiroff.pro' },
            { user: 'Малиш Любов Іванівна', employeePosition: 'Фахівець з підтримки користувачів облікової системи', mail: 'l.malysh@nemiroff.pro' },
            { user: 'Хіміч Сергій Іванович', employeePosition: 'Інженер-програміст', mail: 'sergijj.himich@nemiroff.pro' },
            { user: 'Тараненко Катерина Олександрівна', employeePosition: 'Молодший інженер-програміст', mail: 'kateryna.taranenko@nemiroff.pro' },
        ]
    },
    {
        department: "Відділ підтримки та розвитку інфраструктури",
        users: [
            { user: 'Балашов Максим Олександрович', employeePosition: 'Старший адміністратор системи', mail: 'maksim.balashov@nemiroff.pro' },
            { user: 'Бурковська Єлизавета Сергіївна', employeePosition: 'Адміністратор системи', mail: 'yelyzaveta.burkovska@nemiroff.pro' },
            { user: 'Оскін Дмитро Данилович', employeePosition: 'Адміністратор системи', mail: 'dmytro.oskin@nemiroff.pro' },
            { user: 'Кашуба Сергій Дмитрович', employeePosition: 'Адміністратор системи', mail: 'serhii.kashuba@nemiroff.pro' },
            { user: 'Ладуб Олександр Васильович', employeePosition: 'Молодший адміністратор системи', mail: 'oleksandr.ladub@nemiroff.pro' },
            { user: 'Зелінський Віталій Вячеславович', employeePosition: 'Адміністратор системи', mail: 'vitalijj.zelinskijj@nemiroff.pro' },
            { user: 'Міхєєв Андрій Володимирович', employeePosition: 'Адміністратор системи', mail: 'andrii.mikhieiev@nemiroff.pro' },
            { user: 'Лучко Костянтин Сергійович', employeePosition: 'Адміністратор системи', mail: 'kostiantyn.luchko@nemiroff.pro' },
            { user: 'Шевчук Олександр Валерійович', employeePosition: 'Молодший фахівець', mail: 'oleksandr.shevchuk@nemiroff.pro' },
            { user: 'Никифоров Микола Олександрович', employeePosition: 'Молодший адміністратор системи', mail: 'mykola.nykyforov@nemiroff.pro' },
        ]
    },
]

export const arrayTicketsSetting: Array<TicketsSettingProps> = [
    {src:'./printer.svg', category: "Принтер", subcategory: ["Налаштування принтера", "Сервісне обслуговування"]},
    { src: './computer.svg', category: "Комп'ютер", subcategory: ["Вебкамера", "Звук", "Мережа", "Монітор", "Мишка/Клавіатура", "Налаштування ПК, ноутбукаб моноблока"]},
    {src:'./accessRights.svg', category: "Обліковий запис", subcategory: ["Проблеми зі входом", "Зміна паролю"]},
    {src:'./erp.svg', category: "Термінал/1С", subcategory: ["Проблеми зі входом", "Не коректна робота терміналу", "Підтягування файлів"]},
    {src:'./cloudStorage.svg', category: "Хмарне сховище", subcategory: ["Сервісне обслуговування"]},
    {src:'./cart.svg', category: "Замовлення техніки", subcategory: ["", ""]},
    {src:'./workplaceRemote.svg', category: "Встановлення/Перенесення робочого місця", subcategory: ["", ""]},
    {src:'./programInstalation.svg', category: "Встановлення ПЗ", subcategory: ["", ""]},
    {src:'./permit.svg', category: "СКД", subcategory: []},
    {src:'./videoSurveillance.svg', category: "Відеонагляд", subcategory: ["", ""]},
    {src:'./other.svg', category: "Інше", subcategory: ["", ""]},
]