<script type="text/javascript>"

function(doc){
if(doc.club_players){
for(id in doc.club_players){
var t=doc.club_players[id].goals_away+doc.club_players[id].goals_home;
emit(doc.club_players[id].player_name,{"total":t,"home goals":doc.club_players[id].goals_home,"goals away":doc.club_players[id].goals_away);}
}
}
</script>