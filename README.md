Proyecto NodoIntel
# Backend
Antes de comencar se instalo Python, pip, y virtualenv
## Crear el entorno virtual 
python -m venv venv
## Activarlo
venv\Scripts\activate
## Instalar FastAPI y Uvicorn
pip install fastapi uvicorn
## Ejecutar el servidor
uvicorn main:app --reload --port 8000

# Frontend
## Entrar a la carpeta del frontend
cd frontend
## Instalar las dependencias
npm install
## Ejecutar el proyecto
npm start
  


