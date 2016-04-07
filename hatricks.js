<script type="text/javascript>"

function(doc){
if(doc.club_players){
for(id in doc.club_players){
if(doc.club_players[id].hattrick>0)
emit(doc.club_players[id].player_name,doc.club_players[id].hattrick);
}}}
</script>