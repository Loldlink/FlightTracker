$(document).ready(function() {   //i link sono del mio drive personale e sono accessibili a tutti
    var urls = ["https://virtualu-my.sharepoint.com/personal/lorma-5158_chancellorhs_com/Documents/Flight%20Tracker/a320%20(1).png", 
    'https://am3pap002files.storage.live.com/y4pzL5e91B3xcSzH1wrcSUmkkuvcGR33kYKTw8cyTF-Gw-u7v0EB9qeQAxYtuyZ6x0PiPzMNifBXyRLuKTy9SXYtnCgdjo7f8XkPRImj5ApLxDJRQV-yKbupG6rnci8UXYbztLN044jUZB-NBUHKZbxX-zhftN_WPXRjqsQuB-SJgdDx_UqbiiFBLYXXQlV1dw7KxOp4lNjFO5PTwFLLCB-VVlFlpD4hOem2KLIc-AefgI/a320%20%284%29.png?psid=1&width=1652&height=929',
"https://am3pap002files.storage.live.com/y4pY6bZn4Su3SkG_oi7BCLZ_IJ-f7P_Vr_ma3fjvxJgH1UPJK3qX6Tnos9j42_2GOtnTy-IHZSo4zrccioQslYmvJPlwFoDf_NtlBsf7qPIbWOP2TlB7tVv7dS3VaPz2GwfY6cfrR_6SHAlWlgHAVwWV7vkncQRA2-Vlf12vW91H8Q4iBjG5dO3EpRVN0pJjrn-Hc2zPvPktADOtjEGKigOHWgPmm92puzd8cJBfiVX0Hk/a320%20%286%29.png?psid=1&width=1652&height=929",
"https://am3pap002files.storage.live.com/y4pI2Oe611oaL34JOZARKSd1a5oBFhbpuHlD8okB42FaQAHaxvOnYyuCea16ijxg7qtoYdRaOl2u9R_qC9pTZfx5xUJDF04DweVOzUNtpOYtmoGxt37K3QvEKar0tqH7cb_2rC7esJi8FdIJtBIw-sTDj5RGrEHsoWMQkteuxZbgv4GEiGuctOpW710lA4kACwvSqXjFRv0NccCZ6apT6hRUTyjDNIrHEQgPSkb2nuLK7w/a320%20%288%29.png?psid=1&width=413&height=233",
"https://am3pap002files.storage.live.com/y4pWI5HElXl4LU9YhOR2mZALhnV0Dqd6YATTkxnNbHfJsTkNKus1XUdtMg1J8yiWCGMbmA3pD-pXP4U5MMQcjTI03WUihC9P5IYr8LHIffTVotYLkRMp_wnYgm1Is0sl05r1BafUwKfaol-zP5CjBC-WQwbhehvLASUnH0rTf2nwTE4L9yfE95d-gWG47zxiXXsCqepklpSkT6Mb3sCEgzlcheiraw0Hlz2zGtcsDXgnyc/Screenshot%20%28196%29.png?psid=1&width=413&height=233",
"https://am3pap002files.storage.live.com/y4pC6tCk6OwZx9TFyNJq6V3UvBxmzUHBhPRD-SnFKod_UdniSM58jLNv9byZyEG5TzPF4TJkucsu7qlW1zfLiQCpudUlurulBojemGWh7KQMWbFabuekf0C9qwqxcehQJfUF0mR5p87NgWxktnfNqhwGpaiNM6e4SUVCLNxtZrzZn0w5lnas_NZrMqDE8ZefOVH3fDA6Ijk9aCcD8lv7WfrejnO1u40E1HLHvygDzylfPc/Screenshot%20%28230%29.png?psid=1&width=413&height=233"];
    var cout = 1; 
    $('body').css('background-image', 'url("' + urls[0] + '")');
    $('body').css('width', "100%");
    $('body').css('height', "100%");
    $('body').css('background-repeat', "no-repeat");
    $('body').css('background-size', "cover");
    $('body').css("margin-top","auto");
    $('body').css("margin-left","auto");
    setInterval(function() {
        $('body').css('background-image', 'url("' + urls[cout] + '")');
        $('body').css('width', "100%");
        $('body').css('height', "100%");
        $('body').css('background-repeat', "no-repeat");
        $('body').css('background-size', "cover");
        $('body').css("margin-top","auto");
        $('body').css("margin-left","auto");
        cout == urls.length-1 ? cout = 0 : cout++;
    }, 50000);
});