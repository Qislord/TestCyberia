<template>
    <div class="send-container">
        <div class="title">Расскажите <br>о вашем проекте:</div>
        <div class="input-container">
            <div class="input-name">
                <label class="label" for="name">Ваше имя*</label>
                <input class="input" type="text" placeholder="Введите ваше имя" v-model="formData.name">
            </div>
            <div class="input-email">
                <label class="label" for="email">Email*</label>
                <input class="input" type="email" placeholder="example@mail.ru" v-model="formData.email">
            </div>
            <div class="input-phone">
                <label class="label" for="phone">Телефон*</label>
                <input class="input" type="tel" placeholder="+7 925 765 32 42" v-model="formData.phone">
            </div>
            <div class="input-message">
                <label class="label" for="message">Сообщение*</label>
                <textarea placeholder="Расскажите о своем проекте" v-model="formData.message"></textarea>
            </div>
            <div class="container">
                <div class="checkbox">
                    <input type="checkbox" name="checkbox" v-model="formData.agree" />
                    <span>Согласие на обработку персональных данных</span>
                </div>
                <div class="send-button">
                    <button @click="submitForm">Обсудить проект</button>
                </div>
            </div>
        </div>
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    agree: boolean;
}

const formData = ref<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
});

const error = ref<string | null>(null);

const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^(\+7|8)\s?(\(?\d{3}\)?\s?)?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return phoneRegex.test(phone);
};

const submitForm = async () => {
    if (!formData.value.name || !formData.value.message) {
        error.value = 'Пожалуйста, заполните обязательные поля.';
        return;
    }

    if (!formData.value.email && !formData.value.phone) {
        error.value = 'Пожалуйста, укажите email или телефон.';
        return;
    }

    if (formData.value.phone && !isValidPhone(formData.value.phone)) {
        error.value = 'Неверный формат телефона.';
        return;
    }

    if (formData.value.email && !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(formData.value.email)) {
        error.value = 'Неверный формат email.';
        return;
    }
    if (formData.value.agree == false) {
        error.value = "Необходимо подтвердить согласие на обработку данных.";
        return;
    }

    try {
        const response = await fetch('https://api.test.cyberia.studio/api/v1/feedbacks ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.value.name,
                email: formData.value.email,
                phone: formData.value.phone,
                message: formData.value.message,
                agree: formData.value.agree,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Форма успешно отправлена!');
            resetForm();
        } else {
            error.value = result.message || 'Ошибка отправки формы.';
        }
    } catch (err) {
        error.value = 'Произошла ошибка. Попробуйте позже.';
        console.error(err);
    }
};

const resetForm = () => {
    formData.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
    };
    error.value = null;
};
</script>

<style lang="scss" scoped>
.send-container {
    width: 100%;
    max-width: 1241px;
    margin: 0 auto;
    padding: 0 20px;

    @include md(false) {
        padding: 0;
    }

    .error {
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        margin-top: 20px;
        font-size: 14px;
        text-align: center;

        @include md(false) {
            font-size: 16px;
        }
    }

    .title {
        color: white;
        font-weight: 600;
        font-size: 28px;
        margin-top: 60px;
        text-align: center;
        line-height: 1.2;

        @include sm(false) {
            font-size: 36px;
            margin-top: 80px;
        }

        @include md(false) {
            font-size: 48px;
            margin-top: 100px;
            text-align: left;
        }
    }

    .input-container {
        display: flex;
        position: relative;
        margin-top: 40px;
        flex-direction: column;
        gap: 25px;

        @include sm(false) {
            margin-top: 60px;
            gap: 30px;
        }

        @include md(false) {
            margin-top: 80px;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 40px;
        }

        .container {
            display: flex;
            width: 100%;
            flex-direction: column;

            @include md(false) {
                width: 1240px;
            }
        }

        .send-button {
            margin: 0 auto;
            margin-top: 40px;
            margin-bottom: 60px;

            @include sm(false) {
                margin-top: 50px;
                margin-bottom: 80px;
            }

            @include md(false) {
                margin-top: 70px;
                margin-bottom: 100px;
            }

            button {
                width: 100%;
                max-width: 260px;
                height: 50px;
                cursor: pointer;
                border-radius: 85px;
                background: #2D76F9;
                color: white;
                border: none;
                font-size: 16px;

                @include md(false) {
                    width: 260px;
                    height: 60px;
                }

                &:hover {
                    background: #2155b6;
                    transition: 0.5s;
                }
            }
        }

        .checkbox {
            display: flex;
            justify-content: left;
            align-items: flex-start;
            gap: 10px;
            color: #EFF3FF;
            font-size: 14px;
            line-height: 1.4;

            @include md(false) {
                font-size: 16px;
            }

            input {
                width: 20px;
                height: 20px;
                margin: 0;
                padding: 0;
                border: 1px solid #EFF3FF;
                outline: none;
                flex-shrink: 0;

                @include md(false) {
                    width: 25px;
                    height: 25px;
                }

                ::before {
                    background: #000;
                }

                ::after {
                    background: #000;
                }
            }

            span {
                flex: 1;
            }
        }

        .input-message {
            width: 100%;
            height: 120px;
            position: relative;

            @include md(false) {
                height: 139px;
            }

            .label {
                position: absolute;
                background: #242530;
                margin: -15px 20px;
                color: #EFF3FF;
                padding: 5px;
                font-size: 14px;

                @include md(false) {
                    margin: -20px 20px;
                    font-size: 16px;
                }
            }

            textarea {
                width: 100%;
                height: 100%;
                border: 1px solid #EFF3FF;
                text-decoration: none;
                padding: 15px;
                outline: none;
                resize: none;
                border-radius: 10px;
                color: #EFF3FF;
                background: #242530;
                overflow: hidden;
                font-size: 14px;

                @include md(false) {
                    padding: 10px;
                    font-size: 16px;
                }

                &::placeholder {
                    color: #888;
                }
            }
        }

        .input-name,
        .input-email,
        .input-phone {
            width: 100%;
            position: relative;

            @include md(false) {
                width: 387px;
            }
        }

        .label {
            position: absolute;
            background: #242530;
            margin: -15px 20px;
            color: #EFF3FF;
            padding: 5px;
            font-size: 14px;
            z-index: 1;

            @include md(false) {
                font-size: 16px;
            }
        }

        input {
            border: 1px solid #EFF3FF;
            width: 100%;
            height: 50px;
            text-decoration: none;
            padding: 15px;
            outline: none;
            border-radius: 10px;
            color: #EFF3FF;
            background: #242530;
            font-size: 14px;

            @include md(false) {
                width: 387px;
                height: 61px;
                padding: 10px;
                font-size: 16px;
            }

            &::placeholder {
                color: #888;
            }
        }
    }
}
</style>