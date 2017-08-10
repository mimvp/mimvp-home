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
### 米扑科技主页，设计成了头部（mimvp_header.php）、正文（index.php、hr.php）、脚部（mimvp_footer.php）三层结构
### 这样设计的优点：结构统一、样式布局、网站统计、开发维护等，非常方便快捷。

```php
require "mimvp_header.php";

<div class="mimvp-body" id="mimvp-body">
    ......
</div>

<?php include 'mimvp_footer.php'; ?>
<script type="text/javascript" src="/js/mimvp-1.0.5.min.js"></script>
```

<br/>

### 1. 头部（mimvp_header.php）

<br/>


### 2. 正文（index.php、hr.php）

<br/>


### 3. 脚部（mimvp_footer.php）


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

