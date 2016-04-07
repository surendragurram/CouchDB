<script type="text/javascript>"

function(doc) {
if(doc.team_captain)
{
for(id in doc.team_captain)
emit(doc.team_captain[id].captain,doc.team_captain[id].club_name);
}
}
</script>