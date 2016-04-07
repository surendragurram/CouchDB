<script type="text/javascript>"

function(doc) {
if(doc.club_name){
for(id in doc.club_players){
emit(doc.club_players[id].player_name,{"present club":doc.club_name,"previous club":doc.club_players[id].previous_club});
}
}
}
</script>