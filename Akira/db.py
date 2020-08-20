import pymongo
from bson.objectid import ObjectId
import time

class DataBase:
    def __init__(self):
        self.db = ''
        self.client = ''
        
    def connectBD(self):
        try:
            self.client = pymongo.MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false")
            #self.client = pymongo.MongoClient("mongodb+srv://mongoread:mongoreadMPF@akiradb.ubcx3.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority")
            self.db = self.client["dbAkira"]
            print('Conexão bem sucedida!')
            # return db
        except:
            print("BD error")
    #arrumar classe
    def closeBD(self):
        try:
            self.client.close()
            print('Conexão fechada com sucesso!')
        except:
            print("fechamento falhou")
        
    def getTagsColletion(self):
        return self.db["tagsCollection"]

    def getProblemsCollection(self):
        return self.db["problemCollection"]

    def getConteudo(self):
        collection = self.getProblemsCollection()
        subCategoria = []
        setSubCategorias = set()
        #Pesquisar de uma forma mais inteligente de realizar a query que traga apenas os elementos únicos de cada categoria. Ex (Hardware,Windows, Software,Impressora, etc)
        query = collection.find({})
    
        setCategorias = self.getCategoria(collection)

        for categoria in setCategorias:
            # setCategoria = {'Hardware'}
            # categoria = 'Hardware'
            print(self.getSubCategoria(categoria,collection))

        # # for item in query:
        #     setCategorias.add(item['Categoria'])
        # print(setCategorias)
        

        # {"Hardware": {Teclado, Mouse, Disco rigido},
        #   "windows": {usuario, login}
        # }

        # {
        #   "teclado": {nao funciona},
            #"Mouse": { nao funicona}
        # }

        
    def getCategoria(self, collection):
        setCategorias = set()
        query = collection.find({}).distinct('Categoria')
        for item in query:
            setCategorias.add(item)

        return setCategorias
    
    def getSubCategoria(self, categoria,collection ):
        setSubCategorias = set()
        query = collection.find({"Categoria":categoria}).distinct('Subcategoria')
        for item in query:
            print(item)
               setSubCategorias.add(item)

        return setSubCategorias

        
        
    def getProblemas(self,tags):
        itens = []





inicio = time.time()
variavelTeste = DataBase()
variavelTeste.connectBD()
variavelTeste.getConteudo()
fim = time.time()
print(fim - inicio)


