# CommanderTables
"hello world" angular app

Список планируемого функционала, доступного для (в разработке!)
<style>
.fun-list{
 list-style: none;
}
.fun-list:not(.fun-list-inner) > li{
    display: block;
    margin: 10px 0;
}
.fun-list li:before{
    content: '-\00a0';
}
table{
  width: 100%;
}
td{
  vertical-align: top;
}
</style>
<table>
    <tr>
        <th>Организатор</th>
        <th>Игрок</th>
    </tr>
    <tr>
        <td>
            <ul class="fun-list">
                <li>Создавать/редактировать/просматривать клуб/помещение
                    <br>&nbsp&nbsp со следующей инфой: 
                    <ul class="fun-list fun-list-inner">
                        <li> время работы
                        <li> кол-во свободных мест/столов
                        <li> адресом
                        <li> другая инфа
                    </ul>
                </li>
                <li>Создавать/редактировать/просматривать тур/сезон лиги
                  <br>&nbsp&nbsp каждый тур включает в себя
                    <ul class="fun-list fun-list-inner">
                        <li> правила
                        <li> лист ачивок
                        <li> список игроков с очками за тур
                        <li> 1 и более ивентов, которые включают в себя:           
                             <ul class="fun-list fun-list-inner">
                                 <li> кол-во игр
                                 <li> время на 1 игру
                                 <li> список игроков
                                 <li> максимальное кол-во пересечений/встреч игроков во время игр на ивенте
                                 <li> максимальное и минимальное кол-во людей за столом
                                 <li> список игр, которые включают в себя:        
                                      <ul class="fun-list fun-list-inner">
                                          <li> список игроков
                                          <li> рассадку игроков (включая учет рассадки с предыдущих игр)
                                          <li> рассадку внутри стола
                                          <li> выбор игрока, который ходит первым
                                          <li> таймер игры
                                      </ul>
                                 </li>
                             </ul>
                        </li>
                    </ul>
                </li>
                <li>Создавать профиль игроков (с последующим редактированием незанятых)
                    <br>&nbsp&nbsp со следующей инфой: 
                    <ul class="fun-list fun-list-inner">
                        <li> Имя Фамилия
                        <li> DCI номер
                        <li> код активации
                        <li> email (если известен)
                    </ul>
                </li>
            </ul>
        </td>
        <td>
            <ul class="fun-list">
                <li>Создавать/редактировать свой профиль или привязываться к уже созданному профилю
                <li>Предварительно регистрироваться на ивентах
                <li>Подтверждать участие в ивенте, когда игрок добавлен админом, с указанием командира
                <li>Получать уведомления как просто в системе, так и в рамках игр
                <li>Заполнять листы ачивок в рамках игр
                <li>Просматривать инфу по:
                    <ul class="fun-list fun-list-inner">
                        <li> Клуб/помещению
                        <li> Тур/Сезон лиги
                        <li> Ивентам
                        <li> Играм
                        <li> Своим играм
                        <li> Игрокам
                        <li> Различную статистику
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
</table>