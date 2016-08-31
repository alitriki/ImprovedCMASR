<?php

$post_data = file_get_contents("php://input");
$data_decoded = json_decode($post_data);
$count = 0;
//$urlHeaders = array();
//var_dump($post_data);
/*$query = "scripts/Shells/monitorSite.sh ".$data->urlsite." 2>&1";
//echo ($query);
$shell_response = shell_exec($test_query);
print_r($shell_response);*/

/*//echo ($data->urlsite+" \n");
$header_check = get_headers($data->urlsite);
$response_code = $header_check[0];
echo ($response_code);*/

var_dump(multiRequest($data_decoded));

function getHeader($curls, $headers)
{
    //global $urlHeaders;
    //global $count;

    //$urlHeaders[$count] = $headers;
    //echo "<br>Yeah: ".$headers;
    return strlen($headers);
}

function multiRequest($data, $options = array()) {
    global $count;
  // array of curl handles
  $curly = array();
  // data to be returned
  $result = array();
    //headers

  // multi handle
  $mh = curl_multi_init();

    foreach($data as $website)
    {
        //echo "$website\n";
        $curly[$website] = curl_init($website);
        curl_setopt($curly[$website],CURLOPT_HEADER, true);
        curl_setopt($curly[$website],CURLOPT_NOBODY,true);
        curl_setopt($curly[$website],CURLOPT_HEADERFUNCTION, "getHeader");
        curl_setopt($curly[$website],CURLOPT_RETURNTRANSFER, 1);
        curl_multi_add_handle($mh, $curly[$website]);
        $count=$count+1;
    }
  // loop through $data and create curl handles
  // then add them to the multi-handle
  /*foreach ($data as $id => $d) {

    $curly[$id] = curl_init();

    $url = (is_array($d) && !empty($d['url'])) ? $d['url'] : $d;
      //echo $url;
    curl_setopt($curly[$id], CURLOPT_URL,            $url);
    curl_setopt($curly[$id], CURLOPT_HEADER,         0);
    curl_setopt($curly[$id], CURLOPT_RETURNTRANSFER, 1);

    // post?
    if (is_array($d)) {
      if (!empty($d['post'])) {
        curl_setopt($curly[$id], CURLOPT_POST,       1);
        curl_setopt($curly[$id], CURLOPT_POSTFIELDS, $d['post']);
      }
    }

    // extra options?
    if (!empty($options)) {
      curl_setopt_array($curly[$id], $options);
    }

    curl_multi_add_handle($mh, $curly[$id]);
  }*/


 // execute the handles
   // echo "Count is $count\n";

  $running = null;
  do {
    curl_multi_exec($mh, $running);
  } while($running > 0);

    //var_dump($curly);
  // get content and remove handles
  foreach($curly as $id) {
      //echo "$id\n";
    //$result[$id] = curl_multi_getcontent($id);
      $result[$id] = curl_getinfo($id, CURLINFO_HTTP_CODE);
      curl_multi_remove_handle($mh, $id);
  }

  // all done
  curl_multi_close($mh);

    //var_dump(json_decode($result));
  return json_encode($result);
    //return $result;
}
