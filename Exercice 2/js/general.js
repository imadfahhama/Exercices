//script pour afficher les detail après un clique 
function detail(typeproduit,numproduit)
{
	var content="";//le contenue de la popup
	var titre="";//le titre de la popup
	
	if(typeproduit==1)
	{
		if(numproduit==1)
		{
			titre="Appartement 1";
			content="Prix: 1500DH </br>Localisation: Casablanca </br>caractéristiques: 60M² </br></br><img width='100%' height='40%' src='sources/im1.jpg' />";
		}
		else
		{
			if(numproduit==2)
			{
				titre="Appartement 2";
				content="Prix: 1600DH </br>Localisation: AGADIR </br>caractéristiques: 80M² </br></br><img width='100%' height='40%' src='sources/im2.jpg' />";
			}
			else
			{
				titre="Appartement 3";
				content="</br>Prix: 1700DH </br>Localisation: RABAT </br>caractéristiques: 90M² </br></br><img width='100%' height='40%' src='sources/im3.jpg' />";
			}
		}
	}
	else
	{
		if(typeproduit==2)
		{
			if(numproduit==1)
			{
			titre="Magasin 1";
			content="</br>Prix: 10000DH </br>Localisation: RABAT </br>caractéristiques: 930M² </br></br><img width='100%' height='40%' src='sources/ma1.jpg' />";
			}
			else
			{
				if(numproduit==2)
				{
				titre="Magasin 2";
				content="</br>Prix: 17000DH </br>Localisation: casa </br>caractéristiques: 910M²</br></br><img width='100%' height='40%' src='sources/ma2.jpg' />";
				}
				else
				{
				titre="Magasin 3";
				content="</br>Prix: 16000DH </br>Localisation: FES </br>caractéristiques: 920M²</br></br><img width='100%' height='40%' src='sources/ma3.jpg' />";
				}
			}
		}
		else
		{
			if(numproduit==1)
			{
			titre="Villa 1";
			content="</br>Prix: 13000DH </br>Localisation: Casablanca </br>caractéristiques: 400M² </br></br><img width='100%' height='40%' src='sources/vil1.jpg' />";
			}
			else
			{
				if(numproduit==2)
				{
				titre="Villa 2";
				content="</br>Prix: 18000DH </br>Localisation: RABAT </br>caractéristiques: 300M²</br></br><img width='100%' height='40%' src='sources/vil2.jpg' />";
				}
				else
				{
				titre="Villa 3";
				content="</br>Prix: 19000DH </br>Localisation: TANGER </br>caractéristiques: 200M²</br></br><img width='100%' height='40%' src='sources/vil3.jpg' />";
				}
			}
		}
	}
	//affichage sur la popup
	document.getElementById("titredetail").innerHTML=titre;
	document.getElementById("contenudetail").innerHTML=content;
}