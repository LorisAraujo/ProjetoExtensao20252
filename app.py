from flask import Flask, render_template, request, flash, redirect, session, jsonify, g
import sqlite3

app = Flask(__name__)
app.config['SECRET_KEY'] = 'FitBody2025'
app.config['DATABASE'] = 'database.db'

# função para conectar o banco de dados 
def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            app.config['DATABASE'], 
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory=sqlite3.Row
    return g.db # retorna o meu banco de dados 

# função para fechar o banco de dados 
@app.teardown_appcontext
def close_db(error):
    db = g.pop('db', None)
    if db is not None:
        db.close()


# função para criar a tabela do banco de dados 
def create_table():
    db = get_db() # iniando o banco de dados 
    db.execute("""
        CREATE TABLE IF NOT EXISTS usuario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL,
            peso REAL,
            altura REAL,
            idade INTEGER
        )
    """)

    db.commit() #Salvando tabela 

with app.app_context():
    create_table()
    
#Rota para o home 
@app.route("/")
def home():
    return render_template('home.html')

# área de login
@app.route("/acesso", methods=['POST'])
def acesso():
    email=request.form.get('email')
    senha=request.form.get('senha')

# Conectando o banco de dados 
    db = get_db()
    usuario = db.execute('SELECT * FROM usuario WHERE email = ? AND senha = ?', (email, senha)).fetchone()

    if usuario:
        return redirect('/principal')
    else: 
        flash('nome e/ou senha invalidos, tente novamente!')
        return redirect ('/login')

@app.route("/cadastro")
def cadastro():
    return render_template('cadastro.html')

@app.route("/principal")
def principal():
    return render_template('principal.html')

@app.route("/login")
def login_acesso():
    return render_template('login.html')

# função para cadastrar os usuários 
@app.route("/cadastrando", methods=['POST'])
def cadastrando():
    nome=request.form.get('nome')
    email=request.form.get('email')
    senha=request.form.get('senha')
    peso=request.form.get('peso')
    altura=request.form.get('altura')
    idade=request.form.get('idade')

    # iniciando a conecção com o banco de dados 
    db = get_db()

    db.execute("""
        INSERT INTO usuario (nome, email, senha, peso, altura, idade) VALUES (?, ?, ?, ?, ?, ?)
    """, (nome, email, senha, peso, altura, idade ))

    db.commit()

    return redirect('/')

@app.route("/chatbot")
def chatbot():
    return render_template('chatbot.html')

if __name__ == '__main__':
    app.run(debug=True)