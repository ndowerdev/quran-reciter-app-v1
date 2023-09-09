<?php

function formatNumber($number, $digitTotal = 3)
{
  return str_pad($number, $digitTotal, '0', STR_PAD_LEFT);
}


for ($i = 1; $i <= 114; $i++) {
  $url = "http://www.houseofquran.com/qsys/include/" . formatNumber($i) . ".js";
  // Use basename() function to return the base name of file
  $file_name = basename($url);

  // Use file_get_contents() function to get the file
  // from url and use file_put_contents() function to
  // save the file by using base name
  if (file_put_contents($file_name, file_get_contents($url))) {
    echo "File downloaded successfully";
  } else {
    echo "File downloading failed.";
  }
}
 