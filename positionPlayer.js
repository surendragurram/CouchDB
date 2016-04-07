<script type="text/javascript>"

function(doc) {
if(doc.club_name){
for(id in doc.club_players){
emit(doc.club_players[id].player_name,{"position":doc.club_players[id].position});
}
}
}
</script>