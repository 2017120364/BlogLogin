
<template>
    <div>
        <blog-header></blog-header>
        <div>
            欢迎登录BLOG,HAHAHAHAHAHAHAH
        </div>
        <blog-bottom></blog-bottom>
    </div>
</template>


<script>
import BlogHeader from '@/components/BlogHeader.vue'
import BlogBottom from '@/components/BlogBottom.vue'
export default{
    name:'BlogIn',
    components:{BlogHeader,BlogBottom}
}
</script>