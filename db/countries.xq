<countries>
{
for $country in collection("Facts")//country[matches(@name,'^P','i')
and @population>10000000]
where number($country/@infant_mortality) le 50
let $province := count($country/province)
order by $country/@name
return <country><name>{$country/@name}</name>
<provinces>{$province}</provinces>
</country>
}
</countries> 