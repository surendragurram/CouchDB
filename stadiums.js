<script type="text/javascript>"

function(doc) {
if(doc.stadiums){
for(id in doc.stadiums){
emit(doc.stadiums[id].club_name,{"home stadium":doc.stadiums[id].home_stadium});
}}}
</script>