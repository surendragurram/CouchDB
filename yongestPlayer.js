<script type="text/javascript>"

function(doc) {
if(doc.club_name){
function getAge(dateString)
{
var today = new Date();
var birthDate = new Date(dateString);
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
{
age--;
}
return age;
};
for(id in doc.club_players){
var age1=getAge(doc.club_players[id].born);
emit(age1,doc.club_players[id].player_name);
}
}
}
</script>