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
    content: '- ';
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
                <li>Создавать/редактировать клуб/помещение
                    <br>&nbsp&nbsp со следующей инфой: 
                    <ul class="fun-list fun-list-inner">
                        <li> время работы
                        <li> кол-во свободных мест/столов
                        <li> адресом
                        <li> другая инфа
                    </ul>
                </li>
                <li>Создавать/редактировать тур/сезон лиги
                  <br>&nbsp&nbsp каждый тур включает в себя
                    <ul class="fun-list fun-list-inner">
                        <li> правила
                        <li> лист ачивок
                        <li> список игроков с очками за тур
                        <li> 1 и более ивентов, которые всключают в себя:           
                             <ul class="fun-list fun-list-inner">
                                 <li> кол-во игр
                                 <li> время на 1 игру
                                 <li> список игроков
                                 <li> максимально кол-во пересечений/встреч игроков во время игр на ивенте
                                 <li> максимально к
                                 <li> список игр, которые всключают в себя:        
                                      <ul class="fun-list fun-list-inner">
                                          <li> список игроков
                                          <li> рассадку игроков (влючая/исключая рассадки с предыдущих игр)
                                          <li> время на 1 игру
                                      </ul>
                                 </li>
                             </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </td>
        <td>
            <ul class="fun-list">
                <li>some
                <li>
            </ul>
        </td>
    </tr>
</table>