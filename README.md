# FinalProject
    2024-2 Final Course Project on Data Bases

---

# Explicación de cada proyecto y como usarlo

Normalmente las dependencias de cada proyecto no se suben directamente al repositorio, por lo tanto siempre se crea un documento que guarda las referencias de esos paquetes. En python se llama ``requirements.txt``. En React y React Native el archivo ``package.json`` se actualiza automáticamente

Cada vez que ustedes vayan a enviar un push, deben de primero actualizar el documento, con el fin de que cada persona tenga las dependencias actualizadas.

---

## Backend (Django)
    
1. Clonen el proyecto al local.
2. Ingresen a la carpeta `/backend`.
3. Activen el entorno virtual:

    - En **Windows**:
    ```bash
    venv/Script/activate
    ```

    - En **Linux**:
    ```bash
    source venv/bin/activate
    ```

    Un entorno virtual se encarga de que todas las dependencias se instalen solamente en esa carpeta, y no en todos los proyectos locales de Python.

4. Instalen todas las dependencias del proyecto:
    ```bash
    pip install -r requirements.txt
    ```
    
    Consulta si se instaló bien con el comando:
    ```bash
    pip freeze
    ```

5. **Hagan los cambios que van a hacer.**

6. Si instalaron nuevas dependencias, actualicen `requirements.txt`:
    ```bash
    pip freeze > requirements.txt
    ```

7. Envíen los commits locales con:
    ```bash
    git push origin {branch}
    ```

8. para desactivar el entorno virtual se escribe el comando: 
    ```bash
    deactive
    ```

---

## Frontend (ReactJS)

1. Clonen el proyecto al local.
2. Ingresen a la carpeta `/frontend`.
3. Instalen todas las dependencias del proyecto con `npm`:
    ```bash
    npm install
    ```

4. Inicien el servidor de desarrollo:
    ```bash
    npm start
    ```

    Esto abrirá la aplicación en su navegador por defecto. Si no se abre automáticamente, pueden acceder a `http://localhost:3000`.

5. **Hagan los cambios que van a hacer.**


6. Envíen los commits locales con:
    ```bash
    git push origin {branch}
    ```

---

## Mobile (React Native con Expo)

1. Clonen el proyecto al local.
2. Ingresen a la carpeta `/mobile`.
3. Instalen todas las dependencias del proyecto con `npm`:
    ```bash
    npm install
    ```

4. Inicien el proyecto de Expo:
    ```bash
    npx expo start
    ```

    Esto abrirá la aplicación Expo en el navegador. Desde ahí pueden elegir correr la app en un emulador de Android/iOS o escanear el código QR con la app de Expo Go en su dispositivo móvil.

5. **Hagan los cambios que van a hacer.**

6. Envíen los commits locales con:
    ```bash
    git push origin {branch}
    ```