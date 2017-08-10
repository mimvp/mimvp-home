米扑科技主页（mimvp-home）
----------

mimvp-home 是米扑科技企业官网的开源项目，由北京米扑科技有限公司([mimvp.com](http://mimvp.com))原创分享。

mimvp-home 主要解决了快速搭建企业官网，灵活适配PC电脑、iPad平板、iPhone手机等多端屏幕大小的技术，分层设计页面头部、脚部、正文的模块，自动化创建sitemap网站地图等，旨在帮助中小企业快速构建自己的官方网站。

### 米扑科技官网： [http://mimvp.com](http://mimvp.com)


<br/>
<br/>


米扑官网示例
----------
### 1. PC电脑端
<img src="./img/mimvp-home-pc.png" >

<br/>

### 2. iPad平板端
<img src="./img/mimvp-home-ipad.png" >

<br/>

### 3. iPhone手机端
<img src="./img/mimvp-home-iphone.png" >


<br/>
<br/>


灵活适配多屏
----------
### 1. PC电脑端
PC电脑端，宽度访问大于1280px，正文部分默认最大宽度为1200px，正好符合主流液晶大屏显示器，例如：720p(1280x720) 、WXGA(1366x768)、1080p(1920x1080)、QHD(2560x1440)等。

```css
@media(min-width:1280px) {
    .header-nav-mobile{display:none}
    
    .nav-logo {
	float: left;
	width: 60px;
	margin: 3px 0px;
	padding-left: 10%;
    }
	
    .header-nav {
	max-width: 1200px;
    }
    ......
}
```

<br/>

### 2. iPad平板端
iPad平板端，宽度访问大于640px，小于1280px，符合主流平板尺寸和低配版显示器，例如：iPad(768x1024) 、iPad Pro(1024x1366)、XGA(1024x768)、WXGA(1280x800)等低配显示器。

```css
@media(max-width:1280px) and (min-width:640px) {
    .header-nav{display:none}
    .contact-right{display:none}
    .hr-menu{display:none}
    
    .nav-logo {
	float: left;
	margin: 3px 0px;
	padding-left: 30px;
    }
    
    .col-product {
	width: 50%;
	float: left;
	line-height: 24px;
    }
    ......
}
```

<br/>

### 3. iPhone手机端
iPhone手机端，宽度访问小于640px，符合主流手机尺寸，例如：iPhone4(320x480)、Galaxy(360x640)、iPhone5(320x568)、iPhone6(375x667)、iPhone6 plus(414x736)、Nexus 6P(412x732)等手机尺寸和像素。

```css
@media(max-width:640px) {
    .header-nav{display:none}
    .contact-right{display:none}
    .hr-menu{display:none}
    
    .nav-logo {
    	float: left;
    	margin: 3px 0px;
    	padding-left: 30px;
    }
    
    .mimvp-header, .contact-item, .col-product {
    	min-width: 300px;
    }
    
    .col-product {
    	width: 100%;
    }
    ......
}
```


<br/>
<br/>


网页分层设计
----------
米扑科技主页，设计成了头部（mimvp_header.php）、正文（index.php、hr.php）、脚部（mimvp_footer.php）三层结构

这样设计的优点：结构统一、样式布局、网站统计、开发维护等，非常方便快捷。

```php
require "mimvp_header.php";

<div class="mimvp-body" id="mimvp-body">
    ......
</div>

<?php include 'mimvp_footer.php'; ?>
```

<br/>

### 1. 头部（mimvp_header.php）
```html
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
....
```

<br/>


### 2. 正文（index.php、hr.php）
```php
require "mimvp_header.php";

<div class="mimvp-body" id="mimvp-body">
    ......
</div>

<?php include 'mimvp_footer.php'; ?>
<script type="text/javascript" src="/js/mimvp-1.0.5.min.js"></script>

</body>
</html>
```

<br/>


### 3. 脚部（mimvp_footer.php）
```html
<div class="mimvp-footer">
	<div class="allright">
		© 2009 - <?php echo date("Y"); ?> All Rights by <a href="/">mimvp.com</a>
	</div>
	<div class="sitemap" id="sitemap">
		京ICP备 <a target="_blank" href="http://www.beianbeian.com/s?keytype=1&q=京ICP备16053632号">16053632号</a>
		 | 
		<a target="_blank" href="sitemap.xml">百度地图</a>
		 | 
		<a target="_blank" href="sitemap.html">谷歌地图</a>
		
		<!-- baidu tongji -->
		<script>
		var _hmt = _hmt || [];(function(){var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?2470f08b0a4e8514a3d12a6446dmimvp";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();
		</script>
		<!-- umeng tongji -->
		<span style="display: none; width:0px; height: 0px; padding-left: 20px;">
		<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1262206739'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1262206739%26show%Mimvp' type='text/javascript'%3E%3C/script%3E"));</script>
		</span>
	</div>
</div>
```

<br/>
<br/>


创建网站地图
----------



<br/>
<br/>


技术细节知识
----------

<br/>      
<br/>      
	

米扑科技
----------

![mimvp-logo.png](./img/mimvp-logo.png)

<a href="http://mimvp.com" target="_blank">http://mimvp.com</a>

