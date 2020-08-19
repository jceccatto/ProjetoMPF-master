import pymongo
from bson.objectid import ObjectId


def connectBD():
    try:
        client = pymongo.MongoClient("mongodb+srv://mongoread:mongoreadMPF@akiradb.ubcx3.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority")
        db = client["dbAkira"]
        return db
    except:
        print("BD error")
#arrumar classe
def closeBD():
    try:
        connection.close()
    except:
        print("fechamento falhou")
    
def getTagsColletion(db):
    return db["tagsCollection"]

def getProblemsCollection(db):
    return db["problemCollection"]

def createDictConteudo():
    db = connectBD()
    problem = getProblemsCollection(db)
    hardwareDict = []
    #query para preencher o dict de Hardware
    results = problem.find({"categoria":"Mouse"})
    for result in results:
        item = dict(titulo=result['titulo'], solucao=result['solucao'], id=result[id_problem])
        print(item)
        hardwareDict.append(item)
        print("\n")
        print(hardwareDict)

    
    
#createDictConteudo()


