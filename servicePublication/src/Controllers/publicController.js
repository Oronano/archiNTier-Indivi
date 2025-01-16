const Publication = require("../Models/publicModel");
const cache = require("../Services/cache");

exports.getAllPublications = async (_, res) => {
    try {
        cachedPublication = await cache.getCache("publication");
        if (cachedPublication) {
            return res.status(200).json({
                status: "success",
                results: cachedPublication.length,
                data: {
                    publications: cachedPublication,
                },
            });
        }
        const publication = await Publication.find();

        await cache.setCache("publication", publication, { EX: 300 });

        res.status(200).json({
            status: "success",
            results: publication.length,
            data: {
                publication,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.getOnePublication = async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                publication,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.createPublication = async (req, res) => {
    try {
        const user = req.user.userId;
        const newPublication = await Publication.create({
            ...req.body,
            userId: user,
        });

        // Invalidate cache after creating a new product
        await cache.delCache("products");

        res.status(201).json({
            status: "succes",
            data: {
                publication: newPublication,
            },
        });
    } catch (err) {
        console.error("Erreur lors de la création de la publication", err);
        res.status(400).json({
            status: "Erreur",
            message: err.message,
        });
    }
};

exports.deletePublication = async (req, res) => {
    try {
        await Publication.findByIdAndDelete(req.params.id);

        // Invalidate cache after creating a new product
        await cache.delCache("products");

        res.status(200).json({
            status: "success",
            data: {
                message: "Publication deleted",
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.updatePublication = async (req, res) => {
    try {
        const publication = await Publication.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        // Invalidate cache after creating a new product
        await cache.delCache("products");

        res.status(200).json({
            status: "success",
            data: {
                publication,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};
