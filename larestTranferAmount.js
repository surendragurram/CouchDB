<script type="text/javascript>"

function(doc){
if(doc.club_players){
var h;
for(id in doc.club_players){
if(doc.club_players[id].ever_transferred_amount>doc.club_player[id+1].ever_transferred_amount)
h=id;
}
emit(doc.club_players[h].player_name,doc.club_players[h].ever_transferred_amount);
}}
</script>