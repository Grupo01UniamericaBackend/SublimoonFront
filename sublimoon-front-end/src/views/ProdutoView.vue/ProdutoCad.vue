<template>
    <div class="mainTudo">
     <form action="">
        <label for="nomeProduto">Nome:</label>
        <input type="text" placeholder="Nome do Produto">

        <label for="selectCategoria">Categoria:</label>
            <select name="categorias" id="categoriasSelect">
            <option value="salve">save?</option>
            </select>

            <label for="selectCor">Cor:</label>
            <select name="cores" id="coresSelect">
            <option value="cores">Ainda a colocar</option>
            </select>

        <label for="descricaoProduto">Descrição:</label>
        <input type="text" placeholder="Descrição">

        <label for="img">Selecionar Imagem:</label>
        <input type="file" id="img" name="img" accept="image/*">
        <input type="submit">
     </form>
    </div>
</template>