<script type="text/javascript"
function(doc) {
if(doc.teams_ever_played)
{
for(id in doc.teams_ever_played)
emit(doc.teams_ever_played[id].team);
}
}
</script>