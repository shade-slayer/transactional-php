<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width initial-scale=1" />
  <title><?php echo $title; ?></title>
  <meta type="description" content="<?php echo $description; ?>">
  <meta name="theme-color" content="#11997b">
  <link rel="icon" sizes="192x192" href="asset/images/transactional-sms-logo.svg">
  <meta name="keywords" content="transactional sms,transactional sms india, transactional sms api,sms sender ID" />


  <!-- Font Family Embedded !-->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

  <!--Google Analytics Script!-->
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65023627-3', 'auto');
  ga('send', 'pageview');

  </script>

  <link rel="stylesheet" href="css/bootstrap.css" />
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/font-awesome.css" />
  <link rel="shortcut icon" type="image/png" href="asset/images/logo-green.png" />
</head>

<body>
  <!--Header design starts here!-->

  <!--navbar design ends here!-->

  <nav class="nav navbar-fixed-top navbar-default ">
    <div class="container">
      <!--navbar-header section!-->
      <div class="navbar-header">
        <button type="button" class="btn btn-link navbar-toggle collapsed" data-toggle="modal" data-target="#menuModal">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
         </button>
        <!--
        <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#navbar-menu-list" aria-expanded="false">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            !-->
        <a class="navbar-brand " href="https://transactionalsms.herokuapp.com/">
              <i><img class="" src="asset/images/textlocal-logo.svg" alt="text local logo" /></i>transactionalSMS
            </a>
      </div>
      <!--navbar menu section!-->
      <div class="navbar-right ">
        <div class="collapse navbar-collapse nav-justified" id="navbar-menu-list">
          <ul class="nav navbar-nav">
            <li class=""><a href="pricing">Pricing</a></li>
            <li><a href="resources">Resources</a></li>
            <li><a href="contact">Contact</a></li>
            <!--
                <li><a href="about.html">About Us</a></li>!-->
            <li>
              <buton class="btn sign-up-button btn-block navbar-btn cute-btn " onclick="location.href='https://control.textlocal.in?tlrx=transactionalsms.com';">Log In</buton>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </nav>
  <!--navbar design ends here!-->
<!--***********************************
Navbar Full Screen Test
*********************************!-->
<!-- FULLSCREEN MODAL CODE (.fullscreen) -->

	<div class="modal fade fullscreen" id="menuModal"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content" >
				<div class="modal-header">
						<button type="button" class="close btn btn-link" data-dismiss="modal" aria-hidden="true"><i class="fa fa-close fa-lg"></i></button>
						<h4 class="modal-title text-center"><span class="sr-only">main navigation</span></h4>
				</div>
				<div class="modal-body text-center">
          <ul class="nav navbar-nav">
            <li class=""><a href="pricing.html">Pricing</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="contact.html">Contact</a></li>
            <!--
                <li><a href="about.html">About Us</a></li>!-->
            <li>
              <buton class="btn sign-up-button navbar-btn cute-btn " href="hire-me.html" onclick="location.href='https://control.textlocal.in?tlrx=transactionalsms.com';">Log In</buton>
            </li>
          </ul>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.fullscreen -->
<!--END Navbar Full Screen!-->
