<template>
    <Screen fullScreen class="text-dark bg-dark">
        <div class="bg-light w-full max-w-[1000px] rounded-lg p-3 shadow-lg">
            <div class="text-title text-center font-staatliches">
                Contact us
            </div>
            <p class="text-center">
                Please fill this form in a descent manner
            </p>
            <form action="" class="flex flex-col gap-2">
                <div class="flex flex-col">
                    <label>Fullname</label>
                    <input type="text" maxLength="56"/>
                </div>
                <div class="flex flex-col">
                    <label>Email</label>
                    <input type="email" maxLength="56"/>
                </div>
                <div class="flex flex-col">
                    <label>Description</label>
                    <textarea rows="6" maxLength="256">sss</textarea>
                </div>
                <div class="flex justify-center">
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </Screen>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/colors.scss';

input {
    padding: 5px;
    border: 2px solid colors.$dark;
    border-radius: 10px;
    font-size: 16px;
}

textarea {
    padding: 5px;
    border: 2px solid colors.$dark;
    border-radius: 10px;
    font-size: 16px;
    resize: none;
}

button {
    padding: 5px 20px;
    border: 2px solid colors.$dark;
    border-radius: 10px;
    background-color: colors.$primary;
    color: colors.$light;
    font-size: 20px;
    font-weight: 800;
}
</style>