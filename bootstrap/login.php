<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<link rel="stylesheet" href="login.css">

<body>
    <!-- <header class="header">
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
        <form action="#" class="search-bar">
            <input type="text" placeholder="Search...">
            <button type="submit"><i class='bx bx-search'></i></button>
        </form>
    </header> -->

    <div class="background">
        <div class="image">
            <img src="image/lj_logo.png" alt="lj_logo">
        </div>
    </div>

    <div class="container">
        <div class="content">
            <h2 class="logo"><i class='bx bxl-firebase'></i>Hello Coderz</h2>
            <div class="text-sci">
                <h2>Welcome!<br><span>To Our New Website.</span></h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, culpa!</p>

                <div class="soical-icons">
                    <a href="https://www.facebook.com/search/top/?q=lj%20polytechnic&ref=eyJzaWQiOiIwLjQzNzAzNDUzMDQ1ODc3NjQiLCJxcyI6IkpUVkNKVEl5YkdvbE1qQndiMng1ZEdWamFHNXBZeVV5TWlVMVJBIiwiZ3YiOiJiZWUwOWY5M2ZhNzMyY2ZhNTlhMWNiNmQ5ZjQ1MGQzODkyNDI0ZTQ5IiwiZW50X2lkcyI6W10sImJzaWQiOiJkNDljZjc5MC01M2JhLTQ1Y2YtYTI3Yy0wZTE1N2E0NDE2MDEiLCJwcmVsb2FkZWRfZW50aXR5X2lkcyI6bnVsbCwicHJlbG9hZGVkX2VudGl0eV90eXBlIjpudWxsLCJyZWYiOiJicl90ZiIsImNzaWQiOm51bGwsImhpZ2hfY29uZmlkZW5jZV9hcmd1bWVudCI6bnVsbCwiY2xpZW50X3RpbWVfbXMiOjE2ODA4Njk4MDEwMjgsImVwcyI6IldlYkNoZWNrcG9pbnRGbG93Q29udHJvbGxlciJ9&epa=SEARCH_BOX"><i class='bx bxl-facebook'></i></a>
                    <a href="https://www.instagram.com/ljpolytechnicofficial/"><i class='bx bxl-instagram'></i></a>
                    <a href="https://www.google.com/search?q=lj+polytechnic&oq=&aqs=chrome.2.69i57j69i59l4j69i60l3.1840j0j1&sourceid=chrome&ie=UTF-8"><i class='bx bxl-google'></i></a>
                    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn:li:fsd_profile:ACoAADurxbYBJDQEyp2saONL4vcaZVj5nOZjaoI&keywords=lj%20polytechnic&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b6a76a22-bde7-49c4-890f-de274b98876d&sid=13o"><i class='bx bxl-linkedin'></i></a>
                </div>
            </div>
        </div>
        <div class="logreg-box">
            <div class="form-box login">
                <form method="post" action="login_db.php">
                    <h2>Sign In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-user'></i></span>
                        <input type="text" required name="enrollment">
                        <label>Enrollment no</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt'></i></span>
                        <input type="password" required name="password">
                        <label>Password</label>
                    </div>
                    <div class="remember-forget">
                        <label><input type="checkbox">Remember me</label>
                        <a href="#">Forget Password?</a>
                    </div>
                    <div class="sign in">
                        <button type="submit" class="btn">Sign In</button>
                    </div>
                    <div class="login-register">
                        Don't have a account?  <a href="register.php" class="register-link"> Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>