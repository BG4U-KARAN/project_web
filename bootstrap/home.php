<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="home.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <header>
        <nav>
            <div class="navbar">
                <div class="logo">
                    <img src="image/lj_logo.png" alt="">
                </div>
                <ul class="menu">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <div class="buttons">
                    <button><a href="login.php">Login</a></button>
                    <button><a href="register.php">Sign up</a></button>
                </div>
            </div>
        </nav>
        <div class="content">
            <div class="text-content">
                <div class="text">Hello, Student's Welcome to </div>
                <div class="name">LJ Polytechnic</div>
                <div class="job">
                    <div class="job">
                        <span1> You are a</span1>
                        <div class="typing-text">
                            <span id="element"></span>

                            <!-- Load library from the CDN -->
                            <script src="https://unpkg.com/typed.js@2.0.15/dist/typed.umd.js"></script>

                            <!-- Setup and start animation! -->
                            <script>
                                var typed = new Typed('#element', {
                                    strings: ["Coder", "Designer", "Electrical engineer", "Mechanical engineer", "Civil engineer"],
                                    typeSpeed: 155,
                                    backspeed: 155,
                                    loop: true
                                });
                            </script>
                        </div>
                    </div>
                    <!-- <div class="buttons">
                    <button><a href="login.html">Login</a></button>
                    <button><a href="register.html">Sign up</a></button>
                </div> -->
                </div>
                <!-- <div class="girl">
                <img src="image/1679368253966  Background Removed.png" alt="" class="responsive" width="600"
                    height="400">
            </div> -->
            </div>
            <div class="media-icons">
                <a href="https://www.facebook.com/search/top/?q=lj%20polytechnic&ref=eyJzaWQiOiIwLjQzNzAzNDUzMDQ1ODc3NjQiLCJxcyI6IkpUVkNKVEl5YkdvbE1qQndiMng1ZEdWamFHNXBZeVV5TWlVMVJBIiwiZ3YiOiJiZWUwOWY5M2ZhNzMyY2ZhNTlhMWNiNmQ5ZjQ1MGQzODkyNDI0ZTQ5IiwiZW50X2lkcyI6W10sImJzaWQiOiJkNDljZjc5MC01M2JhLTQ1Y2YtYTI3Yy0wZTE1N2E0NDE2MDEiLCJwcmVsb2FkZWRfZW50aXR5X2lkcyI6bnVsbCwicHJlbG9hZGVkX2VudGl0eV90eXBlIjpudWxsLCJyZWYiOiJicl90ZiIsImNzaWQiOm51bGwsImhpZ2hfY29uZmlkZW5jZV9hcmd1bWVudCI6bnVsbCwiY2xpZW50X3RpbWVfbXMiOjE2ODA4Njk4MDEwMjgsImVwcyI6IldlYkNoZWNrcG9pbnRGbG93Q29udHJvbGxlciJ9&epa=SEARCH_BOX"><i
                        class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/ljpolytechnicofficial/"><i class='bx bxl-instagram'></i></a>
                <a href="https://www.google.com/search?q=lj+polytechnic&oq=&aqs=chrome.2.69i57j69i59l4j69i60l3.1840j0j1&sourceid=chrome&ie=UTF-8"><i class='bx bxl-google'></i></a>
                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADurxbYBJDQEyp2saONL4vcaZVj5nOZjaoI&keywords=lj%20polytechnic&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b6a76a22-bde7-49c4-890f-de274b98876d&sid=13o"><i
                        class='bx bxl-linkedin'></i></a>
            </div> 
    </header>
</body>

</html>