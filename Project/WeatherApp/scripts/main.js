document.addEventListener('DOMContentLoaded', () => {
    const localtime = document.getElementById('date');
    const city = document.getElementById('current-city');
    const current = document.getElementById('weather');
    const temperature = document.getElementById('current_temp');
    const icon = document.getElementById('icon');
    const forecastContainer = document.getElementById('forecast');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Функция для получения и отображения данных о погоде
    const serverWork = async () => {
        try {
            const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=0f32e1a7fa2e4337950165344240107&q=Berlin&days=7&aqi=no&alerts=no');
            const bodyData = await response.json();
            console.log(bodyData);

            // Обновление текущей погоды
            city.textContent = bodyData.location.name;
            localtime.textContent = new Date(bodyData.location.localtime).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            current.textContent = bodyData.current.condition.text;
            temperature.textContent = `${Math.round(bodyData.current.temp_c)}°C`;
            icon.src = bodyData.current.condition.icon.replace('64x64', '128x128');
            // Очистка контейнера для прогноза
            forecastContainer.innerHTML = '';

            // Обновление прогноза на каждый день
            bodyData.forecast.forecastday.forEach(day => {
                // Создание контейнера для элемента прогноза
                const forecastItem = document.createElement('div');
                forecastItem.className = 'forecast_item';

                // Добавление дня недели
                const forecastDay = document.createElement('div');
                forecastDay.className = 'forecast_day';
                forecastDay.textContent = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });

                const forecastIcon = document.createElement('div');
                forecastIcon.className = 'forecast_icon';
                const forecastIconImg = document.createElement('img');
                forecastIconImg.src = day.day.condition.icon.replace('64x64', '128x128');
                forecastIconImg.width = 40;
                forecastIcon.appendChild(forecastIconImg);

                const forecastMaxTemp = document.createElement('div');
                forecastMaxTemp.className = 'forecast_max_temp';
                forecastMaxTemp.textContent = `${Math.round(day.day.maxtemp_c)}°C`;

                const forecastMinTemp = document.createElement('div');
                forecastMinTemp.className = 'forecast_min_temp';
                forecastMinTemp.textContent = `${Math.round(day.day.mintemp_c)}°C`;

                forecastItem.appendChild(forecastDay);
                forecastItem.appendChild(forecastIcon);
                forecastItem.appendChild(forecastMaxTemp);
                forecastItem.appendChild(forecastMinTemp);

                forecastContainer.appendChild(forecastItem);
            });

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
    serverWork();
});