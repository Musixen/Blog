<?php
    $title = $_POST['title'];
    $seo = $_POST['seo'];
    $content = $_POST['content'];
    $category = $_POST['category']; //Example 1 2 3
    $autor = $_POST['author'];

    $db = mysqli_connect("localhost", "admin", "Karate03", "blog");
    
    $query = "INSERT INTO blogPost (title, seo_title, content, category, author) VALUES ('$title', '$seo', '$content', '$category', '$autor')";
    mysqli_execute($db, $query);



?>