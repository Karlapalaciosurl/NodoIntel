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

# NOTA
Se realizo el cambio de url de looker studio ya que no tenia acceso asi que coloque uno por default de looker para que se pudiera visualizar esto en views/Dashboard.jsx (linea 67 del codigo de frontend)

# Frontend
## Entrar a la carpeta del frontend
cd frontend
## Instalar las dependencias
npm install
## Ejecutar el proyecto
npm start
  


