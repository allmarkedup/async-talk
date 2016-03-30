<style>
    .Swatch {
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    .Swatch-title {
        padding: 10px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        display: block;
    }
</style>

{{#each colours}}
<div class="Swatch" style="background-color: {{ this.value }};">
    <span class="Swatch-title">{{ this.name }}</span>
</div>
{{/each}}
