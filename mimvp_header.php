<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Cache-Control" content="no-transform"> 
<meta http-equiv="Cache-Control" content="no-siteapp">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta name="applicable-device" content="pc,mobile" />
<meta name="format-detection" content="telephone=no" />
<meta name="renderer" content="webkit" />
<title><?php 
@$reqUrl = $_SERVER ['PHP_SELF'];
if (strpos ( $reqUrl, 'index.php' ) > 0) {
	echo "米扑科技 - 简单可信赖";
} else if (strpos ( $reqUrl, 'hr.php' ) > 0) {
	echo "加入米扑 - 米扑科技";
} else if (strpos ( $reqUrl, 'price.php' ) > 0) {
	echo "米扑科技 - 简单可信赖";
}?>
</title>
<meta name="description" content="米扑科技，小而美、简而信，工匠艺术的互联网服务。" />
<meta name="keywords" content="米扑科技,米扑,mimvp.com,mimvp,米扑代理,米扑域名,米扑财富,米扑支付,米扑活动,米扑学堂,米扑博客,米扑论坛,小而美,简而信,简单可信赖" />
<meta name="author" content="米扑科技" />
<meta name="version" content="mimvp-home-1.2" />
<meta name="copyright" content="2009-<?php echo date('Y');?> by mimvp.com">
<meta name="baidu_union_verify" content="e96a0aa7da8576ac943bfc70cc713b17">
<meta name="baidu_union_verify" content="20be1643a0f542b29d54e5137bea4225" />
<meta name="baidu-site-verification" content="pzH9C12mmf" />
<meta name="sogou_site_verification" content="QCi6brPm84" />
<meta name="360-site-verification" content="d42818ef57d4f110b6c1fdf268c8cb07" />
<meta name="shenma-site-verification" content="f85fa0493059ca7e6b73ad5ae44751ec_1498128383"/>
<meta name="google-site-verification" content="DSE-4k0kg0zlz8aGyKmZImOoTkpiIreULTsgMwNqJYE" />
<meta name="msvalidate.01" content="7B03EDC84171290ABCCF8E6F2DA645B1" />
<meta name="baiduspider" content="index,follow" />
<meta name="googlebot" content="index,follow" />
<meta name="bingbot" content="index,follow" />
<meta name="robots" content="index,follow" />
<link rel="icon" href="/favicon.ico">
<link rel="stylesheet" href="/css/mimvp-1.0.5.min.css">
</head>

<body oncontextmenu="return false" onselectstart="return false">
	<div class="mimvp-header">
		<nav class="header-nav">
			<div class="nav-logo">
            	<a href="/">
					<img alt="mimvp-logo" src="/img/logo.png" width="44" height="36">
          		</a>
			</div>
			<div class="nav-title">
				<ul id="nav-ul"> 
					<li> 
						<a class="header-nav-item" href="/">首页</a> 
					</li>
					<li> 
						<a class="header-nav-item" target="_blank" href="http://proxy.mimvp.com">米扑代理</a> 
					</li>
					<li> 
						<a class="header-nav-item" target="_blank" href="http://domain.mimvp.com">米扑域名</a> 
					</li>
					<li> 
						<a class="header-nav-item" target="_blank" href="http://pay.mimvp.com">米扑支付</a> 
					</li>
					<li> 
						<a class="header-nav-item" target="_blank" href="http://money.mimvp.com">米扑财富</a> 
					</li>
					<li> 
						<a class="header-nav-item" target="_blank" href="http://blog.mimvp.com">米扑博客</a> 
					</li>
					<li> 
						<a class="header-nav-item" href="/hr.php">加入米扑</a> 
					</li>
				</ul> 
			</div> 
			<div class="nav-clear"></div>
		</nav>
	
		<nav class="header-nav-mobile">
			<div class="nav-logo">
            	<a href="/">
					<img alt="mimvp-logo" src="/img/logo2.png" width="44" height="36">
          		</a>
			</div>
			<div class="nav-title">
				<ul id="nav-ul"> 
					<li> 
						<a class="header-nav-item header-nav-item-mimvp" href="/">米扑科技</a> 
					</li>
					<li style="float: right;"> 
						<a id="hidemenu-btn" class="hidemenu-btn header-nav-item" href="#" onclick="hidemenu_btn_click()">
							 <div class="hidemenu-icon">
								 <span class="icon-bar"></span>
								 <span class="icon-bar"></span>
								 <span class="icon-bar"></span>
							 </div>
						</a> 
						<ul id="hidemenu" class="hidemenu" style="display: none;"> 
							<a class="header-nav-item" target="_blank" href="http://proxy.mimvp.com">米扑代理</a> 
							<a class="header-nav-item" target="_blank" href="http://domain.mimvp.com">米扑域名</a> 
							<a class="header-nav-item" target="_blank" href="http://pay.mimvp.com">米扑支付</a> 
							<a class="header-nav-item" target="_blank" href="http://money.mimvp.com">米扑财富</a>
							<a class="header-nav-item" target="_blank" href="http://blog.mimvp.com">米扑博客</a> 
							<a class="header-nav-item" href="/hr.php">加入米扑</a> 
						</ul> 
					</li> 
				</ul> 
			</div> 
			<div class="nav-clear"></div>
		</nav>
	</div>
