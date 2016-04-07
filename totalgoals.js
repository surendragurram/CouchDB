<script type="text/javascript>"

function(doc){
if(doc.club_players){
for(id in doc.club_players){
emit(doc.club_players[id].player_name,doc.club_players[id].goals);
}}}
</script>